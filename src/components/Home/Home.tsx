import React from 'react';
import { Search } from '../Search/Search';
import hikingImg from '../../assets/imgs/hiking.svg';
import nightImg from '../../assets/imgs/night.svg';
import natureImg from '../../assets/imgs/nature.svg';
import campingImg from '../../assets/imgs/camping.svg';
import environmentImg from '../../assets/imgs/environment.svg';
import scheduleImg from '../../assets/imgs/schedule.svg';
import { Card } from '../Card';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <section className="px-3 bg-gray-50">
      <img src={hikingImg} alt="logo" className="py-8 h-64 w-64 mx-auto" />
      <article className="flex flex-col py-5 px-3 font-sans text-center">
        <span className="font-bold text-3xl text-gray-900">Welcome to LΛNTRN</span>
        <span className="text-l text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint.</span>
      </article>
      <Search />
      <section className="flex flex-col space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0 px-3 my-8">
        <Card
          img={natureImg}
          label="aaa"
          color="blue"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
        <Card
          img={campingImg}
          label="aaa"
          color="yellow"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
        <Card
          img={nightImg}
          label="aaa"
          color="green"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
        <Card
          img={environmentImg}
          label="aaa"
          color="indigo"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
        <Card
          img={scheduleImg}
          label="aaa"
          color="red"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
        <Card
          img={natureImg}
          label="aaa"
          color="purple"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint."
        />
      </section>
    </section>
  );
}