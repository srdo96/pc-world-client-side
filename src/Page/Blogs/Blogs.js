import React from "react";

const Blogs = () => {
  return (
    <div className="mt-5 ml-3">
      <h1 className="text-4xl ">
        1. Difference between Javascript and Nodejs?
      </h1>
      <p className="text-xl mt-3 ml-6">
        <span className="font-bold">Javascript:</span> Javascript is a
        programming language for web browser. It is mainly used for
        client-side.Javascript can only run in web browser. <br />
        <span className="font-bold">Nodejs:</span> Nodejs is a Javascript
        runtime environment. It is mainly used for server-side. Javascript can
        run outside of the browser with the help of nodejs.
      </p>
      <h1 className="text-4xl mt-5">
        2. When should you use nodejs and when should you use mongodb?
      </h1>
      <p className="text-xl mt-3 ml-6">
        Nodejs is a Javascript runtime environment. It's run on V8 engine and
        execute Javascript code outside a web browser. For a small or medium
        level project it very useful. <br />
        Mongodb is a NoSQL database system. It is document-oriented. It has
        flexible data model. For small or medium project it is very useful.
      </p>
      <h1 className="text-4xl mt-4">
        3. Differences between SQL and NoSQL databases?
      </h1>
      <p className="text-xl mt-3 ml-6">
        <span className="font-semibold">SQL:</span>It is a relational database
        management system. It is best for complex queries. It is vertically
        scalable. <br />
        <span className="font-semibold">NoSQL:</span>It is non-relational
        database. It is best for hierarchical data storage. Horizontally
        scalable.
      </p>
      <h1 className="text-4xl mt-4">
        4. What is the purpose of JWT and how does it work?
      </h1>
      <p className="text-xl mt-3 ml-6">
        JWT or JSON Web Token. It is mainly used for authentication. When user
        login to an application. It will create a JWT. And send it back to the
        user. JWT tells the server what routes, services, and resources the user
        is allowed to access.
      </p>
    </div>
  );
};

export default Blogs;
