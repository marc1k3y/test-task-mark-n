export interface CharacterIE {
	name: string
	pictureIndex: number
}

export interface BaseParamsIE {
	power: number
	sleight: number
	intelligence: number
	charisma: number
}

export interface SkillOptionIE {
	title: string
	value: number
}

export interface SkillIE {
	label: string
	options: SkillOptionIE[]
}

export interface ImportDataIE {
	baseParams: BaseParamsIE
	character: CharacterIE
	powerSkill: SkillIE
	sleightSkill: SkillIE
	intelligenceSkill: SkillIE
	charismaSkill: SkillIE
}