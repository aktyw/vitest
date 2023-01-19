import type { DefaultTheme } from 'vitepress'
import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface SocialEntry {
  icon: string
  link: string
}

export interface CoreTeam extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  twitter?: string
  webtools?: string
  fosstodon?: string
  hachyderm?: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => import.meta.hot ? `https://github.com/${name}.png` : `/user-avatars/${name}.png`

export const contributors = (contributorNames as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])
const createLinks = (tm: CoreTeam): CoreTeam => {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.webtools)
    tm.links.push({ icon: 'mastodon', link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}` })

  if (tm.fosstodon)
    tm.links.push({ icon: 'mastodon', link: `https://elk.zone/fosstodon.org/@${tm.fosstodon}` })

  if (tm.hachyderm)
    tm.links.push({ icon: 'mastodon', link: `https://elk.zone/hachyderm.io/@${tm.hachyderm}` })

  if (tm.twitter)
    tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` })

  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.antfu,
    name: 'Anthony Fu',
    github: 'antfu',
    webtools: 'antfu',
    twitter: 'antfu7',
    sponsor: 'https://github.com/sponsors/antfu',
    title: 'A fanatical open sourceror, working',
    org: 'NuxtLabs',
    orgLink: 'https://nuxtlabs.com/',
    desc: 'Core team member of Vite & Vue',
  },
  {
    avatar: contributorsAvatars['sheremet-va'],
    name: 'Vladimir',
    github: 'sheremet-va',
    twitter: 'sheremet_va',
    sponsor: 'https://github.com/sponsors/sheremet-va',
    title: 'An open source fullstack developer',
    desc: 'Core team member of Vitest',
  },
  {
    avatar: contributorsAvatars['patak-dev'],
    name: 'Patak',
    github: 'patak-dev',
    webtools: 'patak',
    twitter: 'patak_dev',
    sponsor: 'https://github.com/sponsors/patak-dev',
    title: 'A collaborative being, working',
    org: 'StackBlitz',
    orgLink: 'https://stackblitz.com/',
    desc: 'Core team member of Vite & Vue',
  },
  {
    avatar: contributorsAvatars.Aslemammad,
    name: 'Mohammad Bagher',
    github: 'Aslemammad',
    webtools: 'aslemammad',
    twitter: 'asleMammadam',
    title: 'An open source developer',
    desc: 'Team member of Poimandres & Vike',
  },
  {
    avatar: contributorsAvatars.Demivan,
    name: 'Ivan Demchuk',
    github: 'Demivan',
    fosstodon: 'demivan',
    twitter: 'IvanDemchuk',
    title: 'A tech lead, fullstack developer',
    desc: 'Author of fluent-vue',
  },
  {
    avatar: contributorsAvatars.userquin,
    name: 'Joaquín Sánchez',
    github: 'userquin',
    webtools: 'userquin',
    twitter: 'userquin',
    title: 'A fullstack and android developer',
    desc: 'Vite\'s fanatical follower',
  },
  {
    avatar: contributorsAvatars.zxch3n,
    name: 'Zixuan Chen',
    github: 'zxch3n',
    hachyderm: 'zx',
    twitter: 'zxch3n',
    title: 'A fullstack developer',
    desc: 'Creating tools for collaboration',
  },
  {
    avatar: contributorsAvatars.poyoho,
    name: 'Yoho Po',
    github: 'poyoho',
    twitter: '@yoho_po',
    title: 'It\'s no problem in my locall',
    desc: 'Core team member of Vite & Vitest',
  },
  {
    avatar: contributorsAvatars.AriPerkkio,
    name: 'Ari Perkkiö',
    github: 'AriPerkkio',
    title: 'A fullstack developer, working',
    desc: 'Core team member of Vitest',
    org: 'Cloudamite',
    orgLink: 'https://cloudamite.com/',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
