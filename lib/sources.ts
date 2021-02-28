import {
	LanguageStringsStructure,
	AvailableLanguages,
} from './languages';

export type DatabaseSource = {
	label_color: string,
	priority: number,
} & ({
	type: 'subscription',
	subscribed: boolean,
} | {
	type: 'category'
});

const LanguageStrings: LanguageStringsStructure<{
	uncategorized: string
}> = {
	'en-US': {
		uncategorized: 'Uncategorized',
	},
};

export const defaultDatabaseSources = (
	language: AvailableLanguages['type'],
): Record<string,
	DatabaseSource> => (
	{
		[LanguageStrings[language].uncategorized]: {
			type: 'category',
			priority: 0,
			label_color: '#cccccc',
		},
	}
);

export interface Source {
	label: string,
	description: string,
}

const subscriptionNames: Readonly<string[]> = ['oreally'] as const;

export const sourceSubscriptions: Record<typeof subscriptionNames[number],
	Source> = {
	'oreally': {
		label: 'O\'Really Newsletter',
		description: 'here goes the description of this newsletter'
	},
} as const;