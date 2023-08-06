import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import {RESTAURANT_DATA} from "./data";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>  {
            Promise.resolve(RESTAURANT_DATA)
        } 
    });
});

test("Shimmer Should Load on HomePage",() => {
    const body = render(
        <StaticRouter>
          <Provider store={store}>
              <Body />
         </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(10);

    console.log(searchBtn);
});
// test("Search Results on Home Page",() => {
//     const body = render(
//         <StaticRouter>
//           <Provider store={store}>
//               <Body />
//          </Provider>
//         </StaticRouter>
//     );

//     const searchBtn = body.getByTestId("search-btn");

//     console.log(searchBtn);
// });