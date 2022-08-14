import { FC, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {useDeleteHeroMutation, useGetHeroesQuery} from '../../api/apiSlice';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { RootState } from '../../store/index';
import { Heroes, Hero } from '../../types/index';


const HeroesList:FC = () => {
    const {
        data: heroes = [],
        isFetching, // каждая загрузка даты с сервера
        isLoading, // только первая загрузка данных с сервера
        isSuccess,
        isError,
        error
        //@ts-ignore
    } = useGetHeroesQuery<any>();
    const [deleteHero, {}] = useDeleteHeroMutation();

    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = [...heroes];
        if(activeFilter === 'all'){
            return filteredHeroes;
        } else {
            return filteredHeroes.filter(item => item.element === activeFilter)
        }
    }, [heroes, activeFilter])


    const onDelete = useCallback((id: string) => {
        deleteHero(id);
    }, []);


    if (isLoading) {
        return <Spinner/>;
    } else if (isError === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }



    const renderHeroesList = (arr:Hero[]) => {
        if (arr.length === 0) {
            return (
                <>
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </>
            )
        }

        return arr.map(({id, description, name ,element}) => {
            return (
                <> 
                    <HeroesListItem name={name} description={description} element={element} onDelete={() => onDelete(id)} key={id} />
                </>
            )
        })
    }


    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;