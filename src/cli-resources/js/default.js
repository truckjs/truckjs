// import TruckJS library:
import '../src/truck';
// View pulls in its module dependencies -
// mediator, model and Box:
import '../src/modules/view';

$(() => {
  let ListView = $.View({
    element: "#list",
    template: 
    `<li>
      <h3>Item {= data }</h3>
    </li>`
  });
  ListView.render(["One","Two","Three"])
});