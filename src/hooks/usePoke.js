import { useEffect, useState } from "react";
import getPokemon from "../store/saga/pokemon/services";

const initialSystem = {
	data: []
};

const usePokemon = (system) => {
	const [hook, setHook] = useState(initialSystem);
	
	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemon();
				
				console.log(response)
				setHook({ data: response });
			} catch (err) {
				return setHook({ data: err });
			}
		})();
	}, [system]);
	return hook;
};

export { usePokemon } ;