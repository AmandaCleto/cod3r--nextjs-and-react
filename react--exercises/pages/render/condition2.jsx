import If from "../../components/If";

export default function condition2() {
  const number = 3;
  return (
    <div>
        <If test={number % 2 == 0}>
          <h1>O número {number} é par</h1>
        </If>
        <If test={number % 2 == 1}>
          <h1>O número {number} é ímpar</h1>
        </If>
    </div>
  )
}
