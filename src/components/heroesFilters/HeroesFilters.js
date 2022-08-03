import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeFilterChanged, filtersFetched, filtersFetching, filtersFetchingError } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
    const {filters, filterLoadingStatus, activeFilter} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request(`http://localhost:3001/filters`)
            .then(data => dispatch(filtersFetched(data)))
            .catch(error => dispatch(filtersFetchingError(error)))
    },[])

    if(filterLoadingStatus === 'loading'){
        return <Spinner />
    } else if (filterLoadingStatus === 'error'){
        return <h5 className="text-center mt-5">Something is wrong</h5>
    }


    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5 className="text-center mt-5">can not found any filters</h5>
        }

        return arr.map(({name, className}) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            
            return <button 
                        key={name} 
                        id={name} 
                        className={btnClass}
                        onClick={() => dispatch(activeFilterChanged(name))}
                        >{name}</button>
        })
    }

    const elements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;