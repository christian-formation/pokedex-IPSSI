import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

import { Disclosure } from '@headlessui/react'
import { HeartIcon, MenuIcon, MailIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React,{Component} from 'react'

const navigation = [
    { name: 'Accueil', href: '/', current: false },
    { name: 'Catégorie', href: '/category', current: false },
  ]

  function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
  }

const Menu = ()=>{
// class Menu extends Component{
// render(){
    // Utilisation de ce hook pour notre active link
    const router = useRouter()
    return (
        <div>
        <Head>
            <title className={styles.title}>Welcome to the Ipssi Pokedex</title>
            <meta name="description" content="Student pokedex project" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    {/* <div className="flex-shrink-0 flex items-center">
                      <div className="block lg:hidden h-8 w-auto">
                        <Image
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                            width={30}
                            height={30}
                        />
                      </div>
                      <div className="hidden lg:block h-8 w-auto">
                        <Image
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                            width={120}
                            height={40}
                        />
                      </div>
                    </div> */}
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                          >
                        <a className={classNames(
                              item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                          >
                        {item.name}
                        </a>
                        </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="pr-3">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <MailIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div>
                      <Link href="/favoris" passHref>
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >                      
                        <HeartIcon className="h-6 w-6" aria-hidden="true" />
                      </button> 
                      </Link>
                    </div>
                  </div>
          
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    >
                      <a
                        className={classNames(
                          item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                      >{item.name}</a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
      )
    // }
}

export default Menu