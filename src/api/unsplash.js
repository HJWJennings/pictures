import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 583d2e5e5e292c7bf2b1295b35cd8633484d215a54545a502ecbbd1988e5ecf8"
	}
});
