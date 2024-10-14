import SearchInput from "../components/Search";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { getAllNews } from "../api/news";
import NewsCard from "../components/cards/newsCard";
import { t } from "i18next";
import { paste } from "../utils/helpers/pasteWithLang";

const News = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [limit, setObj] = useState(25);
	const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
	const [news, setNews] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

  const getNews = async () => {
    try {
      setIsLoading(true)
      await getAllNews({page, sort: sort.sort, order: sort.order, search, limit:limit})
      .then(response => {
        setNews(response.data.rows)
        setTotalCount(response.data.totalCount)
        setIsLoading(false)
      })
      .catch(error => console.log( error))
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
		getNews()
	}, [sort, page])

  const handleSearch = async  () => {
    getNews({page, sort: sort.sort, order: sort.order, search})
  }

    return (
      <>
        <h4 className="text-center myFont header1 py-3">{t('nav_link_news')}</h4>
        <div className="container body-container">
          <div className="row" style={{ minHeight: '60vh' }}>
            <div className="col-md-12">
              <div className="control-box p-2 breadcrumb" >
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
              </div>

              <div className="control-box p-2 main-content">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
                  {
                    isLoading ?
                    <button className="btn" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {t('loading')}
                    </button>
                    :
                    news.map(d => (
                      <div className="col" key={d.id} style={{ display: 'flex', alignItems: 'stretch' }}>
                        <NewsCard
                          id={d?.id}
                          title={ paste([d?.title_tm, d?.title_ru, d?.title_en]) }
                          content={paste([d?.content_tm, d?.content_ru, d?.content_en])}
                          image={d?.images[0]}
                          date={d?.updatedAt}
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
  
export default News;