import {QuizItem, quizType} from "@/data/quizTypes";

const img1 = 'https://e2.edimdoma.ru/data/posts/0002/3588/23588-ed4_wide.jpg?1631182884'
const img2 = 'https://www.chefmarket.ru/blog/wp-content/uploads/2018/05/3_1523684166_bb02a.jpg'

const quiz: QuizItem[] = [
  {
    step: 1,
    type: 'image',
    title: 'When do you usually eat dinner?',
    isMulti: false,
    options: [
      {
        text: 'Before 4pm',
        image: img1,
        id: '1'
      },
      {
        text: 'Between 4pm and 8pm',
        image: img2,
        id: '2'
      },
      {
        text: 'After 8pm',
        image: img1,
        id: '3'
      },
      {
        text: 'I don\'t eat dinner',
        image: img2,
        id: '4'
      },
    ],
  },
  {
    step: 2,
    type: 'image',
    title: 'What do you like?',
    isMulti: false,
    options: [
      {
        text: 'Nuttella',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nutella_for_breakfast_-_Flickr_-_love.jsc.jpg',
        id: '1'
      },
      {
        text: 'Coffee',
        image: 'https://www.shutterstock.com/image-photo/coffee-600nw-222414250.jpg',
        id: '2'
      },
      {
        text: 'Tea',
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg',
        id: '3'
      },
      {
        text: 'Water',
        image: 'https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1300/public/ww-hydration-hub.jpg',
        id: '4'
      },
    ],
  },
  {
    step: 3,
    type: 'simple',
    title: 'What meat do you love SINGLE MODE?',
    isMulti: false,
    options: [
      {
        text: 'Beef',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nutella_for_breakfast_-_Flickr_-_love.jsc.jpg',
        id: '1'
      },
      {
        text: 'Chicken',
        image: 'https://www.shutterstock.com/image-photo/coffee-600nw-222414250.jpg',
        id: '2'
      },
      {
        text: 'Fish',
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg',
        id: '3'
      },
      {
        text: 'Any',
        image: 'https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1300/public/ww-hydration-hub.jpg',
        id: '4'
      },
    ],
  },
  {
    step: 4,
    type: 'simple',
    title: 'What meat do you love?',
    isMulti: true,
    options: [
      {
        text: 'Beef',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nutella_for_breakfast_-_Flickr_-_love.jsc.jpg',
        id: '1'
      },
      {
        text: 'Chicken',
        image: 'https://www.shutterstock.com/image-photo/coffee-600nw-222414250.jpg',
        id: '2'
      },
      {
        text: 'Fish',
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg',
        id: '3'
      },
      {
        text: 'Any',
        image: 'https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1300/public/ww-hydration-hub.jpg',
        id: '4'
      },
    ],
  },
  {
    step: 5,
    type: 'image',
    title: 'The last question?',
    isMulti: true,
    options: [
      {
        text: 'Before 1pm',
        image: img1,
        id: '1'
      },
      {
        text: 'Between 2pm and 3pm',
        image: img2,
        id: '2'
      },
      {
        text: 'After 4pm',
        image: img1,
        id: '3'
      },
      {
        text: 'I eat nothing',
        image: img2,
        id: '4'
      },
    ],
  },
  {
    step: 6,
    type: 'image',
    title: 'Boilerplate question?',
    isMulti: true,
    options: [
      {
        text: 'Before 4pm',
        image: img1,
        id: '1'
      },
      {
        text: 'Between 4pm and 8pm',
        image: img2,
        id: '2'
      },
      {
        text: 'After 8pm',
        image: img1,
        id: '3'
      },
      {
        text: 'I don\'t eat dinner',
        image: img2,
        id: '4'
      },
    ],
  },
]

export default quiz;