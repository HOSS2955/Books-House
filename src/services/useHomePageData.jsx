// import React  , {useEffect} from 'react'
// import { useDispatch , useSelector } from 'react-redux';
// import { useGetHomepageDataQuery } from '../features/homeApiSlice';
// import { homepageActions } from '../store/reducers/homepageSlice';

// const useHomePageData = () => {
//     const { data, isError, isLoading } = useGetHomepageDataQuery();
//     const dispatch = useDispatch();
//     const { setDataInLocalState } = homepageActions;
//     const { wallOfFamesData , aboutData } = useSelector((state) => state.homepage);
//     useEffect(() => {
//       if (data) {
//         dispatch(setDataInLocalState(data));
//         console.log(data)
//         console.log(wallOfFamesData)
//       }
//     }, [dispatch, data]); 
//     return {wallOfFamesData , aboutData}
// }

// export default useHomePageData