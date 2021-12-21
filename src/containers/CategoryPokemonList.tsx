import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

import React,{Component} from 'react';

class CategoryPokemonList extends Component {
render(){
    return (
        <div>
        <Head>
            <title className={styles.title}>Welcome to the Ipssi Pokedex</title>
            <meta name="description" content="Student pokedex project" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        Categorie Pokemon List
        </div>
      )
    }
}

export default CategoryPokemonList