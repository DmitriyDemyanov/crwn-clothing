

import Categories from '../../components/categories/categories.component'

const Home = () => {
  const data = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      'path': 'hats'
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      'path': 'jackets'
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      'path': 'sneakers'
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      'path': 'womens'
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      'path': 'mens'
    }
  ]
  return (
    <Categories categories={data} />
  )

}

export default Home;
