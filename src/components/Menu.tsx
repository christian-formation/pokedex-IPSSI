import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Disclosure } from '@headlessui/react'
import { HeartIcon, MenuIcon, MailIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  nom: Yup.string()
    .min(2, 'trop court!')
    .max(70, 'trop long!')
    .required('Obligatoire'),
  email: Yup.string()
    .email('Email invalid')
    .required('Obligatoire'),
});

const navigation = [
    { name: 'Accueil', href: '/', current: false },
    { name: 'Catégorie', href: '/category', current: false },
  ]

  function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
  }

const Menu = ()=>{

    // Utilisation de ce hook pour notre active link
    const router = useRouter()

    interface context {
      [OpenDialog:string]: any
    }

    // const {OpenDialog}:context = useContext(MainContext)


    let [isOpen, setIsOpen] = useState(false)

  const closeModal = () =>{
    setIsOpen(false)
  }

  const openModal = () =>{
    setIsOpen(true)
  }


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
                    <>
                      <button
                        type="button"
                        onClick={openModal}
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <MailIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      
                      <Transition appear show={isOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModal}
                          >
                            <div className="min-h-screen px-4 text-center">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0" />
                              </Transition.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                              >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium text-gray-900"
                                  >
                                    Contacter le Pokecentre
                                  </Dialog.Title>
                                  <div className="mt-2">
                                      <Formik
                                          initialValues={{
                                            prenom: '',
                                            nom: '',
                                            email: '',
                                            objet: '',
                                            message: '',
                                          }}
                                          validationSchema={SignupSchema}
                                          onSubmit={async (values) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            alert(JSON.stringify(values, null, 2));
                                          }}
                                        >
                                          <Form>
                                            <label htmlFor="prenom">Prenom</label>
                                            <Field id="prenom" name="prenom" placeholder="Prenom" />
                                            <br />
                                            <label htmlFor="nom">Nom</label>
                                            <ErrorMessage name="nom" />
                                            <Field id="nom" name="nom" placeholder="nom" />
                                            <br />
                                            <label htmlFor="email">Email</label>
                                            <ErrorMessage name="email" />
                                            <Field
                                              id="email"
                                              name="email"
                                              placeholder="mail@mail.com"
                                              type="email"
                                            />
                                            <br />
                                            <label htmlFor="objet">Objet</label>
                                            <Field id="objet" name="objet" placeholder="objet" />
                                            <br />
                                            <label htmlFor="message">Message</label>
                                            <Field as="textarea" id="message" name="message" placeholder="message" />

                                            <button type="submit">Submit</button>
                                          </Form>
                                        </Formik>
                                  </div>

                                  <div className="mt-4">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                      onClick={closeModal}
                                    >
                                      Fermer
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition>
                        </>
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
}

export default Menu