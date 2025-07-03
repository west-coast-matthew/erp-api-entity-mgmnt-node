import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, 
    DeleteDateColumn } from 'typeorm';
import { DictionaryEntity } from './dictionary-entity.interface';

@Entity() 
export default class TankStatus implements DictionaryEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name",nullable: false, length:25 })
    name: string;

    @Column({ name: "description", nullable: true, length:100 })
    description?: string;
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at?: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", 
        onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at?: Date;

    @DeleteDateColumn()
    archivedAt?: Date;
}