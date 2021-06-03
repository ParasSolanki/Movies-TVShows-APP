import { useParams } from "react-router-dom";
import ItemContainer from "../containers/item";
import useTVDetail from "../hooks/use-tv-detail";
import dataFilter from "../utils/data-filter";

export default function SingleTV() {
  const { id } = useParams();
  const { details } = useTVDetail(id);
  const data = dataFilter({ details });

  return <ItemContainer data={data} />;
}
