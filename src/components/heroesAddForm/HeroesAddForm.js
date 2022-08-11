import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useCreateHeroMutation } from '../../api/apiSlice';


const HeroesAddForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [descrValue, setDescrValue] = useState('');
    const [element, setElement] = useState('');
    const {filters, filtersLoadingStatus} = useSelector(state => state.filters);

    const [createHero, {isLoading, isError}] = useCreateHeroMutation()

    
    const onSubmitHandler = (e) => {
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


    const renderFilters = (filters, status) => {
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
        return 'Please wait...';
    } else if(isError){
        return 'Something is went wrong';
    }

    
    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
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
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={descrValue}
                    onChange={(e) => setDescrValue(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}>
                    <option value=''>Я владею элементом...</option>
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;