import TypedText from './TypedText'

function SectionHeading({ eyebrow, title, description, typedDescription = description, showCursor = false }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <TypedText text={typedDescription} className="section-heading-copy" cursor={showCursor} />
    </div>
  )
}

export default SectionHeading
