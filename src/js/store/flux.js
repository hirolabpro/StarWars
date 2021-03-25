const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],

			characters: [],

			planets: [],

			starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			apiCharacters: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ characters: data.results });
			},
			apiPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},

			apiStarShips: async () => {
				const url = "https://swapi.dev/api/starships/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ starships: data.results });
			},

			addFavorite: favparam => {
				setStore({ favorites: favparam });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
