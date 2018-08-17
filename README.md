# Welcome to 720HD!

720HD is a single page web-app clone of 500px.com as of August 2018. The site is a social network for photographers to connect, improve and share their best work.

[720HD Live Demo!](http://i720hd.herokuapp.com)

![720 Logo](/app/assets/images/Splash1.png "Logo Title Text 1")

## Design:

The 720HD app was designed and built from scratch in 10 days. The proposal was prepared to implement MVPs to get site functional. Improvements will be added over time. More details about proposal can be viewed [here](https://github.com/tonywzhang/720HD/wiki).

## Features:

* `Frontend to backend user authentication using BCrypt.`
* `Users can upload and edit photos using AWS as a storage.`
* `Feed and profile dynamically update, displaying the most recent photos first.`
* `Users can like photos from all users.`
* `Users can search for other users by username and see their profiles.`

### Sticky Navbar

The Navigation Bar renders differently to the User based on whether they are logged in or not.
While the display is mostly the same, there are some core differences.

The Navigation Bar holds links to my social media pages while there is no user signed in. There are also links that re-direct the user to the login and sign up pages respectively.

A signed in user is able to search for other users by Username. Results are immediately updated upon character insertion into the search bar.

Logged in users are also able to find their way to the feed, access their own Profile, upload photos, and Log Out from the Navigation Bar while logged in.


### Adaptive Feed

The feed updates immediately following an upload to display all photos uploaded. The size of each photo adapts to display the row in the most aesthetic way possible. Each of the photos in the feed is a link to the photo's show page, which shows the details associated with each photo.

![720 Logo](/app/assets/images/feed1.png "Logo Title Text 1")

This was achieved by implementing CSS grid and setting 2 columns for the photos to populate into. Photos are sorted with the newest photos displaying the highest up in the feed.

500px chooses to render one photo at a time, similar to Instagram, but this approach shown above made more sense to me, as it displays photos at a faster rate and organizes them without losing the aspect ratio of the photos.


### Adaptive Profile

Similar to the feed, the User Profile displays that User's photos. Photos are organized by upload date, with the newest photos appearing higher in the screen. CSS grid was used to organize the photos in an aesthetic manner.

![720 Logo](/app/assets/images/profile1.png "Logo Title Text 1")


```js

<div className="profile-photos">
  {Object.values(this.props.photos).reverse().map((photo)=>{
      return <Link to={`/profile/${this.props.userId}/photos/${photo.id}`}>
        <img src={photo.photoUrl} />
      </Link>
  })}
</div>

```

A user's photos populate in the database in the order that they were uploaded, so I was able to render the photos in reverse chronological order by converting the list of Photo objects into an array, and then reverse mapping over that list.

As is the case with the feed, all photos in the profile are links to their respective photo display pages.


### Editable Photos

Photos take the majority of the show page, with the Likes, Title, Upload Date, and Google Map location rendering on the right. Google Map will populate with data on location specified by the uploader.

![720 Logo](/app/assets/images/pshow1.png "Logo Title Text 1")

## Project Design

720HD was designed with simplicity and the aesthetic in mind. With a few ten days to pull this project together, the priority was to focus on core features to build the App upon. Keeping code functional and easy to manage was prioritized over cloning every aspect of 500px, keeping in mind the intention to add more features in the future.

## Technologies

### Backend
  * This fullstack project was created on Rails v 5.2.0.
  * Databases were managed by PostgreSQL.
  * Implements RESTful APIs and handles/responds with JSON data.

### Frontend
  * Using React allows the state of the project to reflect the database at all times, making the application smooth.
  * The webpage was designed using SCSS, and icons were pulled from [FontAwesome](https://fontawesome.com).
  * Babel was used to transpile JSX into JavaScript.

### Additional Technologies
  * Jbuilder
  * NodeJs
  * AJAX
  * npm(Node Package Manager)
  * webpack
  * ReactDOM
  * React Router
  * React History
  * Google API to display approximate Photo Location

### Additional Resources

* [API Endpoints](https://github.com/tonywzhang/720HD/wiki/Backend-Routes)
* [Database Schema](https://github.com/tonywzhang/720HD/wiki/Database-Schema)

## Future Additions

In the future I would like to add/improve:

* User Follows
* Photo Tags
* Search Bar Functionality
* Editable Profile
* Profile Details
* Profile Picture
* Cover Photo for Profile
* Styling of the Photo Display Pages
* Feel free to leave any suggestions and/or feedback! All comments are welcome!
