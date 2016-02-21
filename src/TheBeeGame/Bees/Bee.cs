using System;

namespace TheBeeGame.Bees
{
    public abstract class Bee
    {
        public int Health { get; private set; }

        public abstract int MaxHealth { get; }

        public abstract int HealthLost { get; }

        public Guid UniqueId { get; private set; }

        protected Bee()
        {
            Health = MaxHealth;
            UniqueId = Guid.NewGuid();
        }

        public void Hit()
        {
            Health -= HealthLost;
        }

        public bool IsDead()
        {
            return Health <= 0;
        }
    }
}
