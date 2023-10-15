export interface IAgendaJob {
  attrs: {
    name: string;
    data?: {
      subreddit?: string;
      company?: string;
    };
  };
}
