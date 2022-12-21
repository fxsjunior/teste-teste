// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// )

const name = 'Josh Perez';

const root = document.getElementById('root');

const element = React.createElement('h1', null, 'Hello world');

ReactDOM.render(element, root);


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );