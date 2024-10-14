import { t } from "i18next";

const RadioFilter = ({ rows, selected, setSelected }) => {
	return (
		<div className='m-2 p-1'>
			<div className="form-check mt-1">
				<input
					className="form-check-input"
					checked={selected === 'all'}
					type="radio"
					value={'all'}
					onChange={(e) => setSelected(e.currentTarget.value)}
					id={'all'}
				/>

				<label className="form-check-label" htmlFor={'all'}>
					{t('all')}
				</label>
				</div>
				{rows.map((row) => (
					<div className="form-check mt-1" key={row}>
						<input
							className="form-check-input"
							checked={selected === row}
							type="radio"
							value={row}
							onChange={(e) => setSelected(e.currentTarget.value)}
							id={row}
						/>

						<label className="form-check-label" htmlFor={row}>
							{row}
						</label>

					</div>
				))}
		</div>
	);
};

export default RadioFilter;
