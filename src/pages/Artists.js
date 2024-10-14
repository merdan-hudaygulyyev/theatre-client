import ArtistCard from "../components/cards/artistCard";
import SearchInput from "../components/Search";
import Pagination from "../components/Pagination";
import RadioFilter from "../components/RadioFilter";
import { useEffect, useState } from "react";
import { getAllArtists } from "../api/artists";
import { getArtistDegrees } from "../api/types";
import { paste } from "../utils/helpers/pasteWithLang";
import { t } from "i18next";

const Artists = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [limit, setObj] = useState(25);
	const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
	const [artists, setArtists] = useState([]);
	const [degrees, setDegrees] = useState({ artistDegrees_tm: [], artistDegrees_ru: [], artistDegrees_en: [] })
	const [degree, setDegree] = useState('all');
	const [totalCount, setTotalCount] = useState(0);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

  const getDegrees = async () => {
    await getArtistDegrees()
    .then(res => setDegrees(res.data))
    .catch(error => console.log(error))
  }
  const getArtists = async () => {
    try {
      setIsLoading(true)
      await getAllArtists({page, sort: sort.sort, order: sort.order, degree, search, limit:limit})
      .then(response => {
        setArtists(response.data.rows)
        setTotalCount(response.data.totalCount)
        setIsLoading(false)
      })
      .catch(error => console.log('filtered error->', error))
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getDegrees()
  }, [])

  useEffect(() => {
		getArtists();
	}, [sort, degree, page]);

  const handleSearch = async  () => {
    getArtists({page, sort: sort.sort, order: sort.order, degree, search})
  }

    return (
      <>
        <h4 className="text-center myFont header1 py-3">{t('nav_link_artists')}</h4>
        <div className="container body-container">
          <div className="row" style={{ minHeight: '60vh' }}>
          <div className="col-md-3 p-2 mt-3" style={{ height: '100%' }}>
              <div className="p-3 border">
                
                <b>{t('artist_name')}</b><br />
                <div className="d-flex control-box">
                  <div className="w-100">
                    <SearchInput setSearch={(search) => setSearch(search)} />
                  </div>
        
                  <div className="m-1">
                      <div onClick={handleSearch} className="read-more-full" type="button">
                        <i className="fa fa-search"></i>
                      </div>
                  </div>
                </div>
                <div className="mt-3">
                  <b>{t('artist_degrees')}:</b><br />
                  <RadioFilter
                    rows={paste([ degrees?.artistDegrees_tm, degrees?.artistDegrees_ru, degrees?.artistDegrees_en ])}
                    selected={degree}
                    setSelected={(value) => setDegree(value)}
                  />
                </div>
                {/* <div className="mt-3 sidebar border">
                  {t('celebratio_spectacle')}
                </div> */}
              </div>
            </div>
            <div className="col-md-9 pt-2">
              {/* <div className="control-box p-2 breadcrumb" >
                <p><strong> {t('advertisement')} </strong> </p>
              </div> */}

              <div className="control-box p-3 main-content">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
                  {
                    isLoading ?
                    <button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {t('loading')}
                    </button>
                    :
                    artists.map(artist => (
                      <div className="col" key={artist.id} style={{ display: 'flex', alignItems: 'stretch' }}>
                        <ArtistCard
                          id={artist?.id}
                          fullname={ paste([ artist?.fullname_tm, artist?.fullname_ru, artist?.fullname_en ]) }
                          degree={ paste([ artist?.degree_tm, artist?.degree_ru, artist?.degree_en ])}
                          image={artist.image}
                        />
                      </div>
                    ))
                    
                  }
                </div>
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
      </>
    )
  };
  
export default Artists;