import { t } from "i18next";

const SearchInput = ({ value, setSearch }) => {
	return (
		<input
			type="text"
			className="form-control"
			placeholder={`${t('search')}`}
			value={value}
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	);
};

export default SearchInput;
