import React, { useEffect, useState} from 'react'
import { Button,Form,FormControl} from 'react-bootstrap'
import "./explore.css"
// import Grid from '@material-ui/core/Grid'
import Thumb from '../../components/Thumb'
const Explore = () => {
  const[pokemons,setpokemon]=useState(null);
  const [onepokemon,setonepoke]=useState("");
  const [allpokemon,setAllpoke]=useState([]);
  const [loadmore,setLoad]=useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  // console.log(loadmore)
  const submitHandler= async(e)=>{
    e.preventDefault();
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)     
    const data =await res.json()
    setonepoke(data);
    console.log(onepokemon);
  }
  const getallpoke = async () =>{
    const res= await fetch(loadmore);
    const data= await res.json()
    
    // console.log(data.results)
    setLoad(data.next)
    function createpoke (result){
      // console.log(result)
      result.forEach( async(pokemon) => {
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)     
        const data =await res.json()
        console.log("lol")
        console.log(data);
        // allpokemon.push(data)
        setAllpoke(currentList=>[...currentList,data])
        
        allpokemon.sort((a, b) => a.id - b.id)
        console.log("lolol")
        console.log(allpokemon);
      });
    }
    console.log("maybe")
    console.log(allpokemon);
    createpoke(data.results)  // console.log(data.results[0]);
  };
  useEffect(()=>{
    console.log("here")
    async function apii (){
     await getallpoke();
    }
    apii()    
    
  },[])
  if(pokemons && onepokemon){
    return(
      <div className='loginContainer'>
        <div>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <FormControl
              type="name"
              value={pokemons}
              placeholder='Enter NAME'
              onChange={(e)=>setpokemon(e.target.value)}
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button> 
          </Form>
        </div>
                <Thumb
                key="0"
                id={onepokemon.id}
                image={onepokemon.sprites.other.dream_world.front_default}
                name={onepokemon.name}
                type={onepokemon.types[0].type.name}
                base_experience={onepokemon.base_experience}
              />
      </div>
    )
  }
  return (
    <div className='app-container'>
      {/* <h1>Explore</h1> */}
      <div className='loginContainer'>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <FormControl
              type="name"
              value={pokemons}
              placeholder='Enter NAME'
              onChange={(e)=>setpokemon(e.target.value)}
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button> 
          </Form>
      </div>
      <div className='container'>
        <div className='loginContainer'>
        {allpokemon && allpokemon.map( (pokemonStats, index) => 
              <div>
                <Thumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                base_experience={pokemonStats.base_experience}
              />
              </div>
            )}
            <Button className='Load-more' onClick={() => getallpoke()}>Load more</Button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Explore