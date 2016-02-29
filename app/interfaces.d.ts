interface IData {
  data: Array<IDataItem>
}

interface IDataItem {
  id: number;
  author: string;
  text: string;
}

interface ICommentBoxProps {
  url: string;
  pollInterval: number;
}

interface ICommentFormProps {
  onCommentSubmit: (val:IDataItem) => void;
}
