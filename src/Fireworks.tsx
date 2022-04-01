import React from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';
import './Fireworks.scss';

class Fireworks extends React.PureComponent {

	async customInit(engine: Engine): Promise<void> {
		await loadFireworksPreset(engine);
	}

	render() {
		const options = {
			preset: 'fireworks'
		};

		return (
			<Particles id="background" options={options} init={this.customInit} />
		);
	}
}

export default Fireworks;