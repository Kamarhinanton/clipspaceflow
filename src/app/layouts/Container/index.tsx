import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PageLayoutProps = {
  children: ReactNode
  className?: string
  size?: 'large' | 'small'
}

const Container: FC<PageLayoutProps> = ({
  children,
  className,
  size = 'small',
}) => {
  return (
    <div className={classNames('base-container', className, size)}>
      {children}
    </div>
  )
}

export default Container
