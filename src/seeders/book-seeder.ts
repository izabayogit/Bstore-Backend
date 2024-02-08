// book-seeder.ts
import { QueryInterface } from 'sequelize';
import { Book } from '../entity/models/book';

const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('Books', [
      {
        writer: "John Doe",
        title: "Milk and Honey",
        coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 19.99,
        tag: "Fiction",
        createdAt: "2024-02-08T12:00:00Z",
        authorId: 1
      },
      {
        writer: "Jane Smith",
        title: "The Great Escape",
        coverImage: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 24.99,
        tag: "Fiction",
        createdAt: "2024-02-07T14:30:00Z",
        authorId: 2
      },
      {
        writer: "Mark Johnson",
        title: "In the Shadow of the Moon",
        coverImage: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 29.99,
        tag: "Non-Fiction",
        createdAt: "2024-02-06T16:45:00Z",
        authorId: 3
      },
      {
        writer: "Alice Thompson",
        title: "Eternal Sunshine",
        coverImage: "https://images.unsplash.com/photo-1536783105586-81998a7cf5d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 22.50,
        tag: "Science",
        createdAt: "2024-02-05T10:15:00Z",
        authorId: 4
      },
      {
        writer: "David Turner",
        title: "City of Shadows",
        coverImage: "https://images.unsplash.com/photo-1521734278238-73e83fae1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 27.75,
        tag: "Non-Fiction",
        createdAt: "2024-02-04T08:30:00Z",
        authorId: 5
      },
      {
        writer: "Sarah Brown",
        title: "Whispers in the Wind",
        coverImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18.50,
        tag: "Science",
        createdAt: "2024-02-03T15:45:00Z",
        authorId: 1
      },
      {
        writer: "Michael White",
        title: "Echoes of Silence",
        coverImage: "https://images.unsplash.com/photo-1512484412422-18d7f43d7d89?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 21.99,
        tag: "Essay",
        createdAt: "2024-02-02T12:30:00Z",
        authorId: 2
      },
      {
        writer: "Emily Green",
        title: "Garden of Dreams",
        coverImage: "https://images.unsplash.com/photo-1515266591878-f94dbafaa973?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 26.50,
        tag: "Essay",
        createdAt: "2024-02-01T09:15:00Z",
        authorId: 3
      },
      {
        writer: "Robert Taylor",
        title: "The Forgotten Kingdom",
        coverImage: "https://images.unsplash.com/photo-1523698234121-2c4c19b6c53a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 31.25,
        tag: "Fiction",
        createdAt: "2024-01-31T07:30:00Z",
        authorId: 4
      },
      {
        writer: "Olivia Adams",
        title: "A Symphony of Stars",
        coverImage: "https://images.unsplash.com/photo-1527718938458-32b02f35ee1e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 23.75,
        tag: "Fiction",
        createdAt: "2024-01-30T05:45:00Z",
        authorId: 5
      },
      {
        writer: "Daniel Miller",
        title: "Crimson Horizon",
        coverImage: "https://images.unsplash.com/photo-1524806579753-0a3b1b997c07?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 28.99,
        tag: "Essay",
        createdAt: "2024-01-29T03:00:00Z",
        authorId: 1
      },
      {
        writer: "Sophie Turner",
        title: "Shadows of the Past",
        coverImage: "https://images.unsplash.com/photo-1533686116686-a11b9d6ccf5f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20.50,
        tag: "Science",
        createdAt: "2024-01-28T00:15:00Z",
        authorId: 2
      },
      {
        writer: "Charlie Brown",
        title: "Sunset Serenade",
        coverImage: "https://images.unsplash.com/photo-1523708918185-f6eaec5b11e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25.25,
        tag: "Fiction",
        createdAt: "2024-01-27T22:30:00Z",
        authorId: 3
      },
      {
        writer: "Edward Harris",
        title: "Silent Whispers",
        coverImage: "https://images.unsplash.com/photo-1526659804485-009ea7883f0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30.75,
        tag: "Fiction",
        createdAt: "2024-01-26T20:45:00Z",
        authorId: 4
      },
      {
        writer: "Emma Clark",
        title: "Whispers of the Heart",
        coverImage: "https://images.unsplash.com/photo-1528878292192-4c33545e8a88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 22.99,
        tag: "Non-Fiction",
        createdAt: "2024-01-25T18:00:00Z",
        authorId: 5
      },
      {
        writer: "Henry Turner",
        title: "Beyond the Horizon",
        coverImage: "https://images.unsplash.com/photo-1524494780602-2a0f31c8c075?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 27.50,
        tag: "Science",
        createdAt: "2024-01-24T15:15:00Z",
        authorId: 1
      },
      {
        writer: "Isabel Turner",
        title: "Enchanted Forest",
        coverImage: "https://images.unsplash.com/photo-1533729391581-7917838ae5e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 24.25,
        tag: "Essay",
        createdAt: "2024-01-23T12:30:00Z",
        authorId: 2
      },
      {
        writer: "George Davis",
        title: "Echoes of Time",
        coverImage: "https://images.unsplash.com/photo-1515476263697-fb8f0cb9f680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 29.99,
        tag: "Science-Fiction",
        createdAt: "2024-01-22T09:45:00Z",
        authorId: 3
      },
      {
        writer: "Sophia Miller",
        title: "The Crystal Shard",
        coverImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 26.50,
        tag: "Fantasy",
        createdAt: "2024-01-21T07:00:00Z",
        authorId: 4
      },
      {
        writer: "Ryan Clark",
        title: "Dark Shadows",
        coverImage: "https://images.unsplash.com/photo-1521159829024-a0e468112fc3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 23.75,
        tag: "Mystery",
        createdAt: "2024-01-20T04:15:00Z",
        authorId: 4
      },
    {
      writer: 'John Doe',
      title: 'Milk and Honey',
      coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 19.99,
      tag: 'Fiction',
      createdAt: new Date(),
      authorId: 1, // Assuming John Doe has an ID of 1
    },
    {
      writer: 'Alice Smith',
      title: "Don't just follow your dreams chase them",
      coverImage: 'https://st2.depositphotos.com/1011352/5361/i/450/depositphotos_53614371-stock-photo-inspirational-quote-with-stack-of.jpg',
      price: 24.99,
      tag: 'Non-Fiction',
      createdAt: new Date(),
      authorId: 2, // Assuming Alice Smith has an ID of 2
    },
    {
      writer: 'Bob Johnson',
      title: 'Decent People',
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653950983i/58532129.jpg",
      price: 14.99,
      tag: 'Science',
      createdAt: new Date(),
      authorId: 3, // Assuming Bob Johnson has an ID of 3
    },
    {
      writer: 'Emma Davis',
      title: 'Sun Keep Rising',
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656310241i/61356489.jpg",
      price: 29.99,
      tag: 'Essay',
      createdAt: new Date(),
      authorId: 4, // Assuming Emma Davis has an ID of 4
    },
    {
      writer: 'Chris Wilson',
      title: 'River Sing Me Home',
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675174045i/61111298.jpg",
      price: 22.99,
      tag: 'Fiction',
      createdAt: new Date(),
      authorId: 5, // Assuming Chris Wilson has an ID of 5
    },
    // Add more books as needed
  ]);
};

const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('Books',  {});
};

export { up, down };  // Use named exports
