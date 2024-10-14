// import SpectacleCard from "../components/cards/spectacleCard";

// import { useEffect, useState } from "react";
// import { getSpectaclesWithShows } from "../api/spectacles";
// import { getGenreTypes } from "../api/types";
// import SearchInput from "../components/Search";
// import Pagination from "../components/Pagination";
// import RadioFilter from "../components/RadioFilter";

// const SpectaclesShows = () => {


//   const [isLoading, setIsLoading] = useState('false');
//   const [limit, setObj] = useState(3);
// 	const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
// 	const [ shows, setShows] = useState([]);
// 	const [genres, setGenres] = useState([]);
// 	const [genre, setGenre] = useState('all');
// 	const [totalCount, setTotalCount] = useState(0);
// 	const [page, setPage] = useState(1);
// 	const [dateSearch, setSearchDate] = useState("");
// 	const [search, setSearch] = useState("");

//   const getGenres = async () => {
//     await getGenreTypes()
//     .then(res => setGenres(res.data))
//     .catch(error => console.log(error))
//   }
//   const getSpectacles = async () => {
//     try {
//       setIsLoading('loading')
//       await getSpectaclesWithShows({page, sort: sort.sort, order: sort.order, genre, search,dateSearch})
//       .then(response => {
//         setShows(response.data.rows)
//         setTotalCount(response.data.totalCount)
//         setIsLoading('false')
//       })
//       .catch(error => {console.log('filtered error->', error),setIsLoading('error')})
//     } catch (err) {
//       console.log(err);
//       setIsLoading('error')
//     }
//   };
  
//   useEffect(() => {
//     getGenres()
//   }, [])

//   useEffect(() => {
// 		getSpectacles();
// 	}, [sort, genre, page]);
  
//   const handleSearch = async  () => {
//     getSpectacles({page, sort: sort.sort, order: sort.order, genre, search, dateSearch})
//   }
  
//     return (
//       <>
//         <h4 className="text-center myFont header1 py-3">Sahnalar</h4>
//         <div className="container body-container" style={{ minHeight: '60vh' }}>
//           <div className="row">
//           <div className="col-md-8">
//               <div className="row p-2">
//                 <div className="col-12 col-md-5 my-auto pt-2">
//                     <input type="date" onChange={(e) => setSearchDate(e.target.value)} className="form-control" placeholder="artistiň doly ady boýunça" />
//                 </div>
//                 <div className="col-12 col-md-6 my-auto pt-2">
//                   <SearchInput setSearch={(search) => setSearch(search)} />
//                 </div>
//                 <div  onClick={handleSearch} className="col-12 col-md-1 my-auto d-flex justify-content-start pt-2">
//                     <div className="read-more-full w-100 text-center" type="button" size="small"><i className="fa fa-search"></i></div>
//                 </div>
//               </div>

//               <div className="p-2 main-content">
//                 <div className="row">
//                 {
//                     isLoading === 'loading' || isLoading === 'error' ?
//                     <button className="btn btn-primary" type="button" disabled>
//                       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                       Loading...
//                     </button>
//                     :
//                     isLoading === 'false' && shows.length &&
//                     shows.map(show => (
//                       <div className="col-12 col-md-6 my-3" key={show.id} >
//                       <SpectacleCard
//                         id={show.id}
//                         date={show.date}
//                         isShows={show.isShows}
//                         startTime={show.startTime}
//                         title={show.Spectacles.title}
//                         image={show.Spectacles.images[0]}
//                         runningTime={show.Spectacles.runningTime}
//                       />
//                     </div>
//                     ))
                    
//                   }
//                 </div>
//                 <div className="m-5">
//                   <div>
//                     <Pagination
//                       page={page}
//                       limit={limit}
//                       total={totalCount}
//                       setPage={(page) => setPage(page)}
//                     />
//                   </div>
//                 </div>
//               </div>

//             </div>

//             <div className="col-md-4 p-3 mt-2" style={{ height: '100%' }}>
//               <div className="p-1 border">

//               <div className="pt-3 d-flex flex-column align-items-center">
//               <div style={{ width: '75%' }}>
//                   <b>Kategoriýalar:</b><br />
//                   <RadioFilter
//                     rows={genres}
//                     selected={genre}
//                     setSelected={(value) => setGenre(value)}
//                   />
//               </div>
//               <div style={{ width: '80%' }} className="p-3 mt-3 sidebar border">
//                 bayramcylyk sahnasy
//               </div>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  
// export default SpectaclesShows;