import { useEffect } from 'react';
import styles from './app.module.css';
import useSpeechRecognition from './useSpeechRecognittion';
// import { isEqualArrays } from './utils';

const colors = [
	'aqua',
	'azure',
	'beige',
	'bisque',
	'black',
	'blue',
	'brown',
	'chocolate',
	'coral',
	'crimson',
	'cyan',
	'fuchsia',
	'ghostwhite',
	'gold',
	'goldenrod',
	'gray',
	'green',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lime',
	'linen',
	'magenta',
	'maroon',
	'moccasin',
	'navy',
	'olive',
	'orange',
	'orchid',
	'peru',
	'pink',
	'plum',
	'purple',
	'red',
	'salmon',
	'sienna',
	'silver',
	'snow',
	'tan',
	'teal',
	'thistle',
	'tomato',
	'turquoise',
	'violet',
	'white',
	'yellow',
];

function App() {
	const { liveTranscript, match, start, transcripts } = useSpeechRecognition({
		regex: new RegExp(colors.join('|'), 'gi'),
		startOnLoad: false,
	});

	// useEffect(() => {
	// 	start();
	// }, [start]);

	// console.log(isEqualArrays([], []));

	console.log(match);

	return (
		<>
			<div className={styles.bg} style={{ backgroundColor: match || 'beige' }}>
				{transcripts.map((item) => (
					<p key={item.id}>{item.transcript}</p>
				))}
				<p>{liveTranscript}</p>
			</div>
		</>
	);
}

export default App;
