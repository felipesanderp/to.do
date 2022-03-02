import { FiAlertCircle } from 'react-icons/fi'

import '../styles/emptypage.scss';

export function EmptyPage() {
  return (
    <div className="empty-page">
      <FiAlertCircle size={32} />
      <h3>Sem tarefas!</h3>
    </div>
  )
}