type PrimaryBtnProps ={
  title:string
  onClick?: (...args: any[]) => any;
}

export default function PrimaryButton(props: PrimaryBtnProps) {
  const {title, onClick} = props
  return <> <button className="customized-primary-btn primary-btn" onClick={onClick}>{title}</button> </>
}
