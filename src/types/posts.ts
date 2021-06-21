interface Reactions {
  [name: string]: number
}

export default interface PostsState {
  id: string
  date: string
  title: string
  content: string
  clap: number
  user: string
  reactions: Reactions
}
