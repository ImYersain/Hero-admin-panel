import classNames from "classnames";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeFilterChanged, fetchFilters } from "../heroesFilters/HeroesFiltersSlice";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";
import { RootState } from '../../store/index';
import { FiltersType } from './HeroesFiltersSlice';

const HeroesFilters:FC = () => {
    const {filters, filterLoadingStatus, activeFilter} = useSelector((state: RootState) => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFilters())
    },[])

    if(filterLoadingStatus === 'loading'){
        return <Spinner />
    } else if (filterLoadingStatus === 'error'){
        return <h5 className="text-center mt-5">Something is wrong</h5>
    }


    const renderFilters = (arr:FiltersType[]) => {
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