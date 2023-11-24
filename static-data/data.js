import page1 from '../public/news/page1.jpg'
import page2 from '../public/news/page2.jpg'
import page3 from '../public/news/page3.jpg'
import page4 from '../public/news/page4.jpg'

const catagories = [
   "All",
   "General",
   "Crime",
   "Politics",
   "Entertainment"
]
const loadedPages = {
   "page 1": {
      id: 1, src: page1,
      catagory: {
         id: 1,
         name: "General"
      },
   }, "page 2": {
      id: 2, src: page2,
      catagory: {
         id: 1,
         name: "General"
      },
   }, "page 3": {
      id: 3, src: page3,
      catagory: {
         id: 2,
         name: "Crime"
      },
   }, "page 4": {
      id: 4, src: page4,
      catagory: {
         id: 3,
         name: "Politics"
      },
   },
}


export { catagories, loadedPages } 