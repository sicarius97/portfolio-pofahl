import { createClient } from 'contentful';
const client = createClient({
	space: 'f4br45xfdiuv',
	accessToken: 'IbyZjyMI4_H691F-fje2U9lvxC_55oqh0FpY3qRmWQA',
});
export default async function cards(req, res) {
	const { items } = await client.getEntries();
	res.status(200).json(items);
}
