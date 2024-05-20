import { HeaderContainer, HeaderContent, NewTransactionButton } from "../../pages/Transactions/styles";
import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}