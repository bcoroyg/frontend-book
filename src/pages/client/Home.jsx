import Books from './Books'
const Home = () => {
  return (
    <>
      <div className="bg-secondary bg-opacity-10 p-5 rounded text-center">
        <h1 className="display-4 text-center">¡Web Libros!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non neque
          temporibus doloremque voluptatum dolorum veritatis amet incidunt ut
          ducimus pariatur!.
        </p>
        <hr className="my-4" />
      </div>
      <Books/>
    </>
  );
};

export default Home;
