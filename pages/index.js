import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Seja bem-vindo'/>
            <p className='m-12 text-center'>
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='flex justify-center'>
                <Link href='/pesquisa'>
                    <a className='p-4 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-lg'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='m-12 text-center'>
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index