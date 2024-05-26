// import {restrautList} from "../contants";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import { filterData } from "../utils/Helper";
import Slider from "react-slick";
import search from "../images/search.png";



const Body = () => {

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 11,
    centerPadding: "0px",
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          infinite: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: true,
          swipeToSlide: true,
        }
      }
    ]
  };
  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const [checkboxfilters,setCheckboxFilter] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkboxValues, setValues] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [isFavRestFilter, setIsFavRestFilter] = useState(false);
  const [check, setCheck] = useState(false);
  console.log(checkboxfilters);

  // async function getRestaurants(){
  //   const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4871462&lng=73.8200227&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json();
    
  //   setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
    
      
  // }
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch("https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
 const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
  async function cusinelist() {
    // handle the error using try... catch
    try {
      const response = await fetch("https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
 const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function cusines(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let cusines = json?.data?.cards[i]?.card?.card?.facetList?.filter(ob => ob.label === 'Cuisines')[0].facetInfo;
          // console.log(cusines)
          if (cusines !== undefined) {
            return cusines;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const cusinelist = await cusines(json);

      // update the state variable restaurants with Swiggy API data
      setCheckboxFilter(cusinelist);
    } catch (error) {
      console.log(error);
    }
  }



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
    
  };

  const handleCheck = (e) => {
    setCheck(e)
  }

  if(!allRestaurants){
    return null;
  }else{
    var filteredData = allRestaurants.filter((restaurant) => {
      const nameMatch = restaurant?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase());
     const TopRatedRestaurants =  check ?  restaurant?.info?.avgRating > 4.3 : allRestaurants;
      const categoryMatch = selectedCategories.length === 0 ? "No Matched Restaurants Found" : restaurant?.info?.cuisines?.some((cuisine) => selectedCategories.includes(cuisine));
      return nameMatch && categoryMatch && TopRatedRestaurants;
    });
  }

  
 
  
  useEffect(() => {
    getRestaurants();
    cusinelist();
  },[]);
  
  // console.log("render");


  // const filterData = (e) => {
  //  setFilteredRestaurants(allRestaurants.filter(restaurant => restaurant?.data?.name?.includes(e.target.value)));
 
  // }
    

  const isOnline = useOnline();

  // if(!isOnline){
  //   return <div className="network-error"> 😈 Offline, Please Check Your Internet Connection!!</div>
  // }
   
  //Not render component or early return
   if(!allRestaurants) return null;

  //  if(filteredRestaurants?.length == 0 )
  //  return <h1>No Restaurants Match Your Filter!!</h1>;

    return allRestaurants.length == 0 ? ( 
    <Shimmer /> 
    ) : (
      <>
        <div className="search-container">
          {/* <input 
          type="text"
           className="search-input"
           placeholder="search"
            value={searchText}
            onChange= {(e) => {
              setSearchText(e.target.value);
            }

            }/> */}
            {/* <button
             data-testid="search-btn"
             className="btn" onClick={() =>{
             const data = filterData(searchText, allRestaurants);
             setFilteredRestaurants(data);
            } }>Search</button> */}
             <input type="text" className="search-box" placeholder="Search Restaurant"  onChange={(e) => handleSearchChange(e)}/>
             <img src={search} className="search-icon" />
             {/* <button
             data-testid="search-btn"
             className="btn" onClick={() =>{
             const TopRatedRestaurants = allRestaurants.filter((res) => res.data.avgRating > 4);
             setFilteredRestaurants(TopRatedRestaurants);
            } }>Top Rated Restaurants</button> */}
            {/* <button onClick={handleFilterClick}>Top Rated Restuarants</button> */}
            <span className="toprated">
            <input className="form-check-input" type="checkbox" checked={check} onChange={(e) => handleCheck(e.target.checked)} />
            <label>Top Rated Restaurants</label>
            </span> 
             
           
        </div>
        <div className="slider-wrapper">

        {
          checkboxfilters ? 
          <Slider {...settings}>
            {
                checkboxfilters.map((cusine,index) => {
                  return <>
                  <div className="checkbox-wrapper">
                  <input type="checkbox" className="form-check-input" value={cusine?.label}  checked={selectedCategories.includes(cusine?.label)}
            onChange={handleCheckboxChange}  key={index}/><label>{cusine?.label}</label>
                  </div>
         
                
                  </>
                })
                
            }
            </Slider>
            :
            ""
        }
          
          
            
            </div> 
        <div className="restaurant-list">
          {/* {
            filteredRestaurants.map((restaurant) => {
              return(
                <Link to={"/restaurant/" +restaurant?.info.id} key={restaurant?.info.id}>
                  <RestaurantCard resData={restaurant?.info} /></Link>
              )
            })
          } */}
          {
            isOnline ?
            filteredData.length > 0 ? 
            
              filteredData.map((restaurant) => {
                return(
                  <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard resData={restaurant?.info}/></Link>
                )
              })

              : <div className="nomatch">No Matched Restaurant</div>
              :  <div className="network-error"> 😈 Offline, Please Check Your Internet Connection!!</div>
          }
           
            
            
          
          
          
        </div>
     </>
    )
  }
  
  export default Body;