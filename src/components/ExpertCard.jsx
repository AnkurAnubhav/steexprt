import './ExpertCard.css'

export default function ExpertCard({ expert }) {
  return (
    <div className="expert-card">
      <div className="expert-card__photo-wrap">
        <img
          src={expert.photo || 'https://via.placeholder.com/150'}
          alt={expert.name}
          className="expert-card__photo"
          loading="lazy"
        />
        <div className="expert-card__exp-badge">{expert.experience}</div>
      </div>
      <div className="expert-card__body">
        <h3 className="expert-card__name">{expert.name}</h3>
        <p className="expert-card__designation">{expert.designation}</p>
        <span className="badge badge-accent expert-card__specialty">
          {expert.specialty}
        </span>
        <p className="expert-card__bio">{expert.bio}</p>
      </div>
    </div>
  )
}