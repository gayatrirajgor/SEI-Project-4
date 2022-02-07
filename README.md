# TKG Fashion 👗
by [Gayatri](https://github.com/gayatrirajgor), [Kumar](https://github.com/Kumarmehta019), and [Talia](https://github.com/taliaglantz)

## Table of Contents
|No. | Content                           | 
|----|-----------------------------------|
|1   | [Project Overview](#overview)     |
|2   | [Project Brief](#brief)           |  
|3   | [Technologies Used](#tech)        | 
|4   | [Approach](#approach)             |
|5   | [Wins & Challenges](#wins)        |
|6   | [Bugs](#bugs)                     |
|7   | [Future Ideas](#future)           |
|8   | [Result](#result)                 |

<a name=“overview”></a>
## 1. Overview 
TKG Fashion is a full-stack e-commerce app that allows customers to browse and buy clothes. Online retail websites such as [ASOS](https://www.asos.com/), [Boohoo](https://www.boohoo.com/), and [Shein](https://www.shein.co.uk/) influenced this project. This project was deployed via Heroku and can be accessed [here](http://tkg-fashion.herokuapp.com/).

<a name=“brief”></a>
## 2. Brief 📃
* Build a full-stack application by making your front end and your back end
* Consume your API with a separate front end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Be deployed online

<a name=“tech”></a>
## 3. Technologies 💻
Back End:
* Python
* Django
* PostgreSQL
* Django Restful Framework
* Cloudinary 
* Pyjwt
 
Front End: 
* React
* [Semantic UI](https://react.semantic-ui.com/)
* [Pure React Carousel](https://www.npmjs.com/package/pure-react-carousel)
* Axios 
* [Animate CSS](https://animate.style/)

Other:
* Insomnia 
* Pipenv
* [Asana](https://asana.com/) (planning)
* Google Jamboard (wireframes)
* TablePlus 
* Git & GitHub

<a name=“approach”></a>
## 4. Approach ✏️
### Planning
We agreed as a group to develop a clothes e-commerce website as it would be a great experience, and so TKG Fashion was created. After deciding on the concept for our app, we worked together to create wireframes and entity-relationship diagrams.

Asana was used to plan our MVP and develop user stories for both the front and back ends. Tasks were then given to ensure that work was distributed equitably and that all requirements were met. Git and GitHub were utilised for version control, and continual communication was maintained during pushes and pulls to reduce and resolve any merge conflicts.

|![Wireframe - Project 4 1](https://user-images.githubusercontent.com/59033443/151788417-7b3e8339-de8f-46b5-abc3-d3885445b55d.png)| ![Wireframe - Project 4 2](https://user-images.githubusercontent.com/59033443/151788482-81e5fc77-0ee4-48c5-a580-7ef093969813.png) |
| ---- | ---- |
| ![Wireframe - Project 4 3](https://user-images.githubusercontent.com/59033443/151788611-860da8f2-4498-4a0f-a1fc-7efee54d263d.png) | ![Wireframe - Project 4 4](https://user-images.githubusercontent.com/59033443/151788647-2d17f314-f25b-4f89-a7d2-30d145bbfce8.png) | 
| ![Wireframe - Project 4 5](https://user-images.githubusercontent.com/59033443/151788723-ebdbe560-8588-4fe4-947a-0caa06259f47.png) |![Wireframe - Project 4 6](https://user-images.githubusercontent.com/59033443/151788838-a449b4a8-b5b8-4967-a518-5cf800c18c5c.png)|
| ![Wireframe - Project 4 7](https://user-images.githubusercontent.com/59033443/151788777-0c327173-be56-4af5-a079-017eb8acc8aa.png) |

![Blank diagram](https://user-images.githubusercontent.com/59033443/151789225-d8004630-9fd8-4776-97ae-2b589ca9cfce.png)

### Back End
We chose as a group to build out the project’s back end elements so that we could all gain expertise, as well as to limit the amount of time spent on the back end owing to the navigators seeing any potential errors. The back end is a CRUD API, using PostgreSQL, Python and Django.
We agreed as a group to seed data into various tables of our database. For this project, I concentrated on the products table and the images of those products; the majority of this data was obtained from [Shein](https://www.shein.co.uk/).

We were confident in the relationships between each of our models as a result of our extensive preparation. There were a total of six models (products, images, orders, reviews, sellers and jwt_auth). The product and image models are shown below, and it was critical to verify that the `ForeignKey` and model relationships were correct. 

```py
class Product(models.Model):
    SIZES = (
        ('XS','extra-small'),
        ('S','small'),
        ('M','medium'),
        ('L','large'),
        ('XL','extra-large')
    )

    CATEGORIES = (
        ('T-Shirts', 'T-Shirts'),
        ('Jeans', 'Jeans'),
        ('Dresses', 'Dresses'),
        ('Jumpers', 'Jumpers'), 
        ('Shorts', 'Shorts'),
        ('Shirts', 'Shirts'),
        ('Trousers', 'Trousers'),
        ('Socks', 'Socks')
    )

    COLOURS = (
        ('Black', 'Black'),
        ('Yellow', 'Yellow'),
        ('Blue', 'Blue'),
        ('Red', 'Red'),
        ('Green', 'Green'),
        ('Orange', 'Orange'),
        ('White', 'White'),
        ('Purple', 'Purple'),
        ('Brown', 'Brown'),
        ('Grey', 'Grey'),
        ('Beige', 'Beige'),
        ('Pink', 'Pink')
    )

    GENDERS = (
        ('M', 'Male'),
        ('F', 'Female')
    )

    name = models.CharField(max_length=100, default=None)
    price = models.IntegerField()
    size = models.CharField(max_length=10, default=None, choices=SIZES)
    stock = models.IntegerField()
    category = models.CharField(max_length=50, default=None, choices=CATEGORIES)
    gender = models.CharField(max_length=50, default=None, choices=GENDERS)
    colour = models.CharField(max_length=50, default=None, choices=COLOURS)
    
    def __str__(self):
        return f'Product: {self.name}, Size: {self.size}, Category: {self.category}, Colour: {self.colour}'
```

```py
class Image(models.Model):
    title = models.CharField(max_length=500, default=None)
    image = models.ImageField(upload_to='images/')
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'
```

Once we had created the models, we worked on the controllers. Serializers were also constructed and evaluated in Insomnia to verify we had all of the necessary data. Most schemas featured nested fields because of the relationships between tables. ‘Populated’ schemas were constructed to ensure that there were no circular import problems. 

### Front End
Once the backend had been completed, we split tasks to complete different components on the frontend. For styling, we decided to use [Semantic UI](https://react.semantic-ui.com/). I worked on the product index page, the filter categories, the review form, and the styling of the product show page for this project.

#### Product Index Page
I made a `GET` request, using `useEffect` to retrieve all of the data from the database and then stored it to state to show all of the products on the website.
```js
useEffect(() => {
    const params = new URLSearchParams(location.search)
    const value = params.get('value')

    const getData = async () => {
      try {
        const { data } = await axios.get('api/products/')
        if (value) {
          setCategoryValue(value)
        }
        setProducts(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [location.search])
```

#### Filter Categories
The filter conditions selected by the user are first stored to state. The filter method is then used to return a new array containing the filtered products; a sort method is chained onto the end of the filter method. Depending on what the user selects, this method arranges the products by high - low or low - high. 

```js
const filteredProducts = products.filter(product => {
  return (
    (product.category === categoryValue || categoryValue === null) && // we can filter out for our category
    (product.gender === genderValue || genderValue === null) // and gender options in one go
  )
}).sort((a, b) => { // chaining on our sorting function at the end of filter
  if (priceValue === null) return 0 // If no price filter set dont sort
  if (priceValue === 1) return a.price - b.price // low to high
  if (priceValue === 2) return b.price - a.price // high to low
})
```

#### Review Form
I wanted a user to be able to submit a form only if they were logged in when I created the review form. To do this, I utilised a ternary that determines whether or not the user is authenticated. The `userIsAuthenticated` function first determines whether or not a payload exists; if it does not, false is returned. The function then checks if the current time of the token is less than the expiry time, and if it returns true, the user can be authenticated.

```js
const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}
```
The code snippet below indicates that if the user is not authenticated, simply the product comments should be displayed; but, if the user is authenticated, a review form should be presented as well as the comments.

```js
<Comment.Group size='large'>
  {!userIsAuthenticated() ?
    <Comment>
      {reviews.map(review => {
        return (
          <Comment.Content key={review.id}>
            <Comment.Author><Icon name='user circle' />Author: {review.owner.username}</Comment.Author>
            <Comment.Metadata>
              <div><Icon name='calendar alternate' />Posted on: {review.posted_on}</div>
              <Divider />
              <div><Icon name='star' />Rating: {review.rating}/5</div>
            </Comment.Metadata>
            <Comment.Text>{review.comment}</Comment.Text>
            <Divider />
          </Comment.Content>
        )
      })}
    </Comment>
    :
    <>
      <Comment>
        {reviews.map(review => {
          return (
            <Comment.Content key={review.id}>
              <Comment.Author><Icon name='user circle' />Author: {review.owner.username}</Comment.Author>
              <Comment.Metadata>
                <div><Icon name='calendar alternate' />Posted on: {review.posted_on}</div>
                <Divider />
                <div><Icon name='star' />Rating: {review.rating}/5</div>
              </Comment.Metadata>
              <Comment.Text>{review.comment}</Comment.Text>
              <Divider />
            </Comment.Content>
          )
        })}
      </Comment>
      
      <Segment>
        <ReviewForm
          userIsOwner={userIsOwner}
          getUsername={getUsername}
        />
      </Segment>
    </>
  }
</Comment.Group>
```

<img width="570" alt="Screenshot 2022-01-31 at 12 26 22" src="https://user-images.githubusercontent.com/59033443/152825984-b056f53f-6ebb-4553-9d60-ae34ed85c58c.png">
<img width="478" alt="Screenshot 2022-01-31 at 12 29 10" src="https://user-images.githubusercontent.com/59033443/152826041-847b525a-f1d8-4e5a-b3b4-f8679d662d2f.png">

To transfer data from the form to the backend, the user’s data was first set to state. This part of the project became a little more difficult because the backend required a user id to be associated with the form, which had to be sent from the front end. To get the user id, I first developed a function that checked to see if the current user id signed in matched the user in the payload. Then, using the map function, I created a method called `getUsername` that returns the user’s id from an array of reviews. 
```js
const userIsOwner = (currentUserId) => {
  const payload = getPayload()
  if (!payload) return false
  return currentUserId === payload.sub
}

const getUsername = reviews.map(review => {
  return (
    review.owner.id
  )
})

```

The information entered into the form by the user is then sent to the back end through a POST request.
```js
const [reviewForm, setFormData] = useState({
  product: id,
  comment: '',
  rating: '',
  owner_id: userIsOwner(getUsername[0]),
})

const handleSubmit = async event => {
  event.preventDefault()
  try {
    await axios.post('/api/reviews/', reviewForm, 
      {

        headers: { Authorization: `Bearer ${token}` } ,
      }
    )
    window.location.reload()
  } catch (err) {
    setHasError(true)
  }
}
```

<a name=“wins”></a>
## 5. Wins & Challenges 🏆
### Wins
* This project resulted in me being more comfortable with React and being able to use other libraries with it.

### Challenges
* We were utilising Python and PostgreSQL for the first time after only one week of learning, so it took longer than intended to figure out the relationships between tables and become acquainted with the technologies.
* We all had to make sure that we installed the same packages because we were utilising a virtual environment for this project.
* We discovered early on in our project that any data seeded did not get loaded into our databases when we perform a pull request, therefore we had to ensure that data was loaded into our individual databases after someone had seeded data.

<a name=“bugs”></a>
## 6. Bugs 🛠️
* There is a section for similar items on the product show page; the item page that the user is on is also displayed in the similar items section.
* When more than one of the same product is added to the cart, the item is duplicated rather than increased in quantity.

<a name=“future”></a>
## 7. Future Ideas 💭
* Mobile Responsive 
* Create payment methods 
* Set up an email to be sent to the user once they place the order

<a name=“result”></a>
## 8. Result

### Homepage 
![TKG Fashion](https://user-images.githubusercontent.com/59033443/151790209-e357a40d-ed19-40ea-9139-6a85678504c2.png)

### Browse page
![TKG Fashion (1)](https://user-images.githubusercontent.com/59033443/151790518-e744c334-0b3f-48d7-8a2a-369a61e2d72d.png)

### Login page 
![TKG Fashion (2)](https://user-images.githubusercontent.com/59033443/151793281-a2eaaffb-6799-4f29-82ad-c010b06b88b8.png)

### Register page
![TKG Fashion (3)](https://user-images.githubusercontent.com/59033443/151793412-6fb2e492-1ee1-483f-b7a5-db96f676e53b.png)

### Product show page
![TKG Fashion (4)](https://user-images.githubusercontent.com/59033443/151793539-73d64c2f-922d-4314-b72f-73f6df282173.png)

### Cart page
![TKG Fashion (5)](https://user-images.githubusercontent.com/59033443/151794188-b506b621-3beb-44ef-970e-f5b7946ce817.png)
