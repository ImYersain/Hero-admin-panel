import { v4 as uuidv4 } from 'uuid';
import { FC, useState } from "react";
import { useSelector } from 'react-redux';
import { useCreateHeroMutation } from '../../api/apiSlice';
import { RootState } from '../../store';
import { Hero } from '../../types';
import { FiltersType } from '../heroesFilters/HeroesFiltersSlice';



const HeroesAddForm:FC = () => {
    const [nameValue, setNameValue] = useState('');
    const [descrValue, setDescrValue] = useState('');
    const [element, setElement] = useState('');
    const {filters, filterLoadingStatus} = useSelector((state: RootState) => state.filters);

    const [createHero, {isLoading, isError}] = useCreateHeroMutation()

    
    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        const newHero = {
            id: uuidv4(),
            name: nameValue,
            description: descrValue,
            element: element
        }

        createHero(newHero).unwrap();

        setNameValue('');
        setDescrValue('');
        setElement('');
    }


    const renderFilters = (filters: FiltersType[], status: string) => {
        if (status === "loading") {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>
        }

        if(filters && filters.length > 0){
            return filters.map(({name}) => {
                if(name === 'all') return;

            return <option key={name} value={name}>{name}</option>
            })
        }
    }

    if(isLoading){
        return <div>Please wait...</div>;
    } else if(isError){
        return <div>Something is went wrong</div>;
    }

    
    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">New hero name</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="what i can?"
                    style={{"height": '130px'}}
                    value={descrValue}
                    onChange={(e) => setDescrValue(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choise element of hero</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}>
                    <option value=''>I have skills of this element' ...</option>
                    {renderFilters(filters, filterLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;