import SpectacleCard from "../components/cards/spectacleCard";
import SearchInput from "../components/Search";
import Pagination from "../components/Pagination";
import RadioFilter from "../components/RadioFilter";

import { useEffect, useState } from "react";
import { getSpectaclesWithShows } from "../api/spectacles";
import { getGenreTypes } from "../api/types";
import { paste } from "../utils/helpers/pasteWithLang";

import { t } from "i18next";

const Spectacles = () => {
  const [isLoading, setIsLoading] = useState('false')
  const [limit, setObj] = useState(25)
	const [sort, setSort] = useState({ sort: "createdAt", order: "desc" })
	const [ shows, setShows] = useState([])
	const [genres, setGenres] = useState({ genreTypes_tm: [],genreTypes_ru: [],genreTypes_en: [] })
	const [genre, setGenre] = useState('all')
	const [totalCount, setTotalCount] = useState(0)
	const [page, setPage] = useState(1)
	const [dateSearch, setSearchDate] = useState("")
	const [search, setSearch] = useState("")
	const [status, setStatus] = useState(false)

  const getGenres = async () => {
    await getGenreTypes()
    .then(res => setGenres(res.data))
    .catch(error => console.log(error))
  }

  const getSpectacles = async () => {
    try {
      setIsLoading('loading')
      await getSpectaclesWithShows({page, sort: sort.sort, order: sort.order, genre, search,dateSearch, limit, status})
      .then(response => {
        setShows(response.data.rows)
        setTotalCount(response.data.totalCount)
        setIsLoading('false')
      })
      .catch(error => {
        console.log('filtered error->', error)
        setIsLoading('error')
      })
    } catch (err) {
      console.log(err)
      setIsLoading('error')
    }
  };
  
  useEffect(() => {
    getGenres()
  }, [])

  useEffect(() => {
		getSpectacles()
	}, [sort, genre, page, status])
  
  const handleSearch = async  () => {
    getSpectacles({page, sort: sort.sort, order: sort.order, genre, search, dateSearch})
  }
  
  const clearFilters = async  () => {
    setStatus(false)
    setGenre('all')
    setSearchDate('')
    setSearch('')
  }
  
  return (
    <>
        <h4 className="text-center myFont header1 py-3">{t('nav_link_spectacles')}</h4>
        <div className="container body-container" style={{ minHeight: '60vh' }}>
          
          <div className="row">
          <div className="col-md-4 p-3 mt-2" style={{ height: '100%' }}>
              <div className="p-1 border">
                <div className="pt-3 d-flex flex-column align-items-center">

                  <div style={{ width: '75%' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <b>FILTER:</b>
                        <button onClick={() => clearFilters()} type="button" className="btn btn-outline-primary p-0 m-2">{t('clear')}</button>
                      </div>
                      <select className="form-select mt-3 mb-3" aria-label={`${t('by_date')}`} value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value={false}>{t('future_spectacles')}</option>
                        <option value={true}>{t('past_spectacles')}</option>
                      </select>
                        <input type="date" value={dateSearch} onChange={(e) => setSearchDate(e.target.value)} className="form-control mb-3" />
                        <SearchInput value={search} setSearch={(e) => setSearch(e)} />
                        <div onClick={handleSearch} className="read-more-full w-100 text-center mt-3 mb-3" type="button" size="small"><i className="fa fa-search"></i></div>
                  </div>
                  <div style={{ width: '75%' }}>
                      <b>{t('categories')}:</b><br />
                      <RadioFilter
                        rows={paste([genres?.genreTypes_tm, genres?.genreTypes_ru, genres?.genreTypes_en ])}
                        selected={genre}
                        setSelected={(value) => setGenre(value)}
                      />
                  </div>
                  {/* <div style={{ width: '80%' }} className="p-3 mt-3 sidebar border">
                    bayramcylyk sahnasy
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-2 main-content">
                <div className="row">
                {
                    isLoading === 'loading' || isLoading === 'error' ?
                    <button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {t('loading')}
                    </button>
                    :
                    isLoading === 'false' && shows.length > 0 &&
                    shows.map(show => (
                      <div className="col-12 col-md-6 my-3" key={show.id} >
                        <SpectacleCard
                          id={show.id}
                          date={show.date}
                          isShows={show.isShows}
                          startTime={show.startTime}
                          title={paste([show.Spectacles.title_tm,show.Spectacles.title_ru,show.Spectacles.title_en])}
                          runningTime={paste([show.Spectacles.runningTime_tm,show.Spectacles.runningTime_ru,show.Spectacles.runningTime_en])}
                          image={show.Spectacles.images[0]}
                        />
                      </div>
                    ))
                    
                  }
                </div>
                <div className="m-5">
                  <div>
                    <Pagination
                      page={page}
                      limit={limit}
                      total={totalCount}
                      setPage={(page) => setPage(page)}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};
  
export default Spectacles;