import React, { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './AddItem';
import ListItems from './ListItems'
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';


function Content(){

    const API_URL = 'http://localhost:3500/items'

    const [items ,setItems]  = useState([])
    const [newItem ,setNewItem] = useState('')
    const [fetchError ,setFetchError] = useState(null)
    const [isLoading ,setIsLoading] = useState(true)
    const [searchItem, setSearchItem] = useState('')

    useEffect( () => {
        
        const fetchItem = async () => {
            try{
                const response = await fetch(API_URL);
                if(!response.ok) throw Error('Data not received')
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null)
                } catch(err){
                    setFetchError(err.message)
                }finally{
                    setIsLoading(false)
                }
            }
            setTimeout(()=> {
             (async () => await fetchItem())()
            }, 2000)
        },[items])

    
    const handleCheck = async (id) => {
        const check = items.map(item => item.id === id ? {...item,checked:!item.checked } : item )
        setItems(check)

        // for update
        const updateItem = check.filter(item => item.id === id)
        const updateOption = {
            method : 'PATCH',
            Headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({checked:updateItem[0].checked})
        }
        const reqUrl = ` ${API_URL}/${id}`
        const result = await apiRequest(reqUrl,updateOption)
        if(result)setFetchError(result)
    }
    const handleDelete = async (id) => {
        const deleteItem = items.filter(item =>item.id !== id )
        setItems(deleteItem)

        // for delete 
        const deleteOption = {method :'DELETE'}
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl,deleteOption)
        if(result) setFetchError(result)
    }
    
    const addItem = async (item) => {
        const id = items.length?items[items.length-1].id + 1: 1;
        const newItem = { id , checked:false , item}
        const listItem = [...items,newItem]
        setItems(listItem)

        // for create method
        const postOption ={
            method : 'POST',
            Headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newItem)
        }
        const result = await apiRequest(API_URL,postOption)
        if(result) setFetchError(result)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!newItem)return;
        addItem(newItem)
        setNewItem('')
    }
 
    return(
        <>
            <AddItem 
            handleSubmit = {handleSubmit}
            newItem = {newItem}
            setNewItem = {setNewItem}
            />
            
            <SearchItem 
            setSearchItem = {setSearchItem}
            searchItem = {searchItem}
            />

            {isLoading && <p>Item loading...</p>}
            {fetchError && <p>{`Error : ${fetchError}`}</p>}
            {!isLoading && !fetchError && <ListItems
            items = {items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />}
        </> 
    )
} export default Content