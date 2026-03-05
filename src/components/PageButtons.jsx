import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const PageButtons = ({ page, setPage, totalPages, className }) => (
    <div className="page__buttons">
      <button
        className="page__btn--left page__btn"
        onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        disabled={page === 1}
      >
        <FontAwesomeIcon icon="angle-left" />
      </button>
      <span className="page__btn--info">Page {page}</span>
      <button
        className="page__btn--right page__btn"
        onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        disabled={page === totalPages}
      >
        <FontAwesomeIcon icon="angle-right" />
      </button>
    </div>
  );

export default PageButtons